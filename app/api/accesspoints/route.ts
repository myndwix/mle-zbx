import {NextRequest, NextResponse } from 'next/server';
import mysql from 'mysql2/promise' 
import { headers } from 'next/headers';
export const dynamic = 'force-dynamic' 
export async function GET(req: NextRequest, res: NextResponse) {

    try {
        const pool = mysql.createPool({
            host: '172.24.100.199',
            user: 'test',
            database: 'zabbix',
            password: 'n0c123#',
            waitForConnections: true,
            connectionLimit: 5,
            maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
            idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
            queueLimit: 0,
            enableKeepAlive: true,
            keepAliveInitialDelay: 0,
          });
      
        // execute will internally call prepare and query
        // const [results, fields] = await pool.execute(
        //   `SELECT a.hostid, a.name as hostname, f.ip, b.itemid, MID(b.name, 22, 400) as itemname, b.key_, c.triggerid, d.status, d.value FROM hosts a
        //   JOIN items b ON a.hostid=b.hostid
        //   JOIN functions c ON b.itemid=c.itemid
        //   JOIN triggers d ON c.triggerid=d.triggerid
        //   JOIN hosts_groups e on a.hostid=e.hostid
        //   JOIN interface f on a.hostid=f.hostid
        //   WHERE left(b.key_, 21)='ruckusSZAPConnStatuss' and b.itemid<>124281 and left(b.name,23)='AP Connection Status AP' -- and f.type=1 and e.groupid=25 and a.status=0 -- and d.triggerid in
        //   ORDER BY a.hostid;
        //   `
        // );
        const [results, fields] = await pool.execute(
          `SELECT a.hostid, a.name as hostname, f.ip, b.itemid, mid(b.name, 22, 400) as itemname, b.key_, c.triggerid, d.status, d.value FROM hosts a
          JOIN items b ON a.hostid=b.hostid
          JOIN functions c ON b.itemid=c.itemid
          JOIN triggers d ON c.triggerid=d.triggerid
          join hosts_groups e on a.hostid=e.hostid
          join interface f on a.hostid=f.hostid
          WHERE (left(b.key_, 21)='ruckusSZAPConnStatuss' or left(b.key_, 20)='ruckusZDWLANAPStatus') and b.itemid<>124281 and left(b.name,23)='AP Connection Status AP' or left(b.name,21)='AP Connection Status:'
          ORDER BY a.hostid;
          `
        );
        pool.end();
        return NextResponse.json(results, {status: 200})
      } catch (err:any) {
        console.log(err.sqlMessage);
        return NextResponse.json(err, {status: 404})
      }
}

