const apiAccessPoints = {
    "jsonrpc": "2.0",
    "method": "trigger.get",
    "params": {
        "triggerids": [
            "31196",
            "31199",
            "31207",
            "31215",
            "31212",
            "31216",
            "31203",
            "31209",
            "31208",
            "31192",
            "31205",
            "31195",
            "31191",
            "31206",
            "38158",
            "31185",
            "31187",
            "31190",
            "31214",
            "31188",
            "31189",
            "31202",
            "31211",
            "31200",
            "31217",
            "31198",
            "31210",
            "31213",
            "31197",
            "31204",
            "31194"            
        ],
        "output": ["triggerid","description","expression", "functions", "value"],
        "selectFunctions": "extend"
    },
    "id": 1
}

const apiCardReaders = {
      
    "jsonrpc": "2.0",
    "method": "trigger.get",
    "params": {
        "triggerids": [
            "37228",
            "37231",
            "37234",
            "38953",
            "37240",
            "37243",
            "37246",
            "37249",
            "37252",
            "37258",
            "37261",
            "37264",
            "37267",
            "37270",
            "37273",
            "37276",
            "37279",
            "37282",
            "37285",
            "37288",
            "37291",
            "37294",
            "37297",
            "37300",
            "37255",
            "52311",
            "52314"
        ],
        "output": ["triggerid","description","expression", "functions", "value"],
        "selectFunctions": "extend"
    },
    "id": 1
}


const apiGeneralInternetDownloads = {
      
    "jsonrpc": "2.0",
    "method": "history.get",
    "params": {
        "itemids": "45947",
        "sortfield": "clock",
        "sortorder": "DESC",
        "limit": 1
    },
    "id": 1
}

const apiGeneralInternetUploads = {
    "jsonrpc": "2.0",
    "method": "history.get",
    "params": {
        "itemids": "46000",
        "sortfield": "clock",
        "sortorder": "DESC",
        "limit": 1
    },
    "id": 1
}


const apiServerInternetDownloads = {
      
    "jsonrpc": "2.0",
    "method": "history.get",
    "params": {
        "itemids": "45946",
        "sortfield": "clock",
        "sortorder": "DESC",
        "limit": 1
    },
    "id": 1
}

const apiServerInternetUploads = {
    "jsonrpc": "2.0",
    "method": "history.get",
    "params": {
        "itemids": "45999",
        "sortfield": "clock",
        "sortorder": "DESC",
        "limit": 1
    },
    "id": 1
}


const apiNexusInterfaces = {
    "jsonrpc": "2.0",
    "method": "history.get",
    "params": {
        "itemids": [
            "81639",
            "81640",
            "81643",
            "81651",
            "81652",
            "81653",
            "81682",
            "81683",
            "81684",
            "81685",
            "81668",
            "81686",
            "81687",
            "81696",
            "81697",
            "81698",
            "81699",
            "81700",
            "81701",
            "81702",
            "81703",
            "81704",
            "81705",
            "81706",
            "81690",
            "81692",
            "81693",
            "81694",
            "81695",
            "81718",
            "81720",
            "81721",
            "81722",
            "81723",
            "81724",
            "81725",
            "81726",
            "81709",
            "81710",
            "81712",
            "81713",
            "82059",
            "82060",
            "82063",
            "82071",
            "82072",
            "82073",
            "82102",
            "82103",
            "82104",
            "82105",
            "82088",
            "82106",
            "82107",
            "82116",
            "82117",
            "82118",
            "82119",
            "82120",
            "82121",
            "82122",
            "82123",
            "82124",
            "82125",
            "82126",
            "82110",
            "82112",
            "82113",
            "82114",
            "82115",
            "82138",
            "82140",
            "82141",
            "82142",
            "82143",
            "82144",
            "82145",
            "82146",
            "82129",
            "82130",
            "82132",
            "82133",
            "81641",
            "82061"
        ],
        "sortfield": "clock",
        "sortorder": "DESC",
        "limit": 82
    },
    "id": 1
}


const apiNexusTriggers = {
      
    "jsonrpc": "2.0",
    "method": "trigger.get",
    "params": {
        "triggerids": [
            "23407",
            "23828",
            "23865",
            "23885",
            "23905",
            "23925",
            "38432",
            "23959",
            "23976",
            "23993",
            "24010",
            "24027",
            "24061",
            "24078",
            "24095",
            "24112",
            "24129",
            "24149",
            "24189",
            "24229",
            "24249",
            "24269",
            "24289",
            "24309",
            "24329",
            "24349",
            "24369",
            "24389",
            "24429",
            "24449",
            "24469",
            "24489",
            "24509",
            "24546",
            "24563",
            "24583",
            "24603",
            "24623",
            "24640",
            "24660",
            "24680",
            "24700",
            "24720",
            "24740",
            "24760",
            "24780",
            "24800",
            "24820",
            "24840",
            "24860",
            "24880",
            "24900",
            "24920",
            "24937",
            "24954",
            "24971",
            "24988",
            "25008",
            "25028",
            "25048",
            "25068",
            "25085",
            "25105",
            "25145",
            "25165",
            "25185",
            "25205",
            "25225",
            "25245",
            "25265",
            "25285",
            "25305",
            "25325",
            "25345",
            "25365",
            "25385",
            "25405",
            "25425",
            "38957",
            "25465",
            "25485",
            "25522",
            "25542",
            "25562",
            "25582",
            "25602",
            "25619",
            "25659",
            "25679",
            "25696",
            "25713",
            "25733",
            "25753",
            "43262",
            "43265",
            "43268",
            "43271",
            "43274",
            "44676",
            "44679"           
        ],
        "output": ["triggerid", "value"],
        // "selectFunctions": "extend"
    },
    "id": 1
}

module.exports = {
    apiAccessPoints, 
    apiCardReaders, 
    apiGeneralInternetDownloads, 
    apiGeneralInternetUploads, 
    apiServerInternetDownloads, 
    apiServerInternetUploads, 
    apiNexusInterfaces,
    apiNexusTriggers
};