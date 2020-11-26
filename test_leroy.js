let answer = {
    "displayedName": {
        "displayedName": {
            "value": [
                "Профиль маячковый ПВХ 10 мм L3м"
            ],
            "description": "Полное наименование товара для клиента"
            }
        },
    "stock": {
        "stocks": {
                "34": {
                "2": "35",
                "3": "42",
                "4": "58",
                "5": "57",
                "6": "112",
                "20": "51",
                "22": "78",
                "26": "34",
                "32": "22",
                "35": "358",
                "40": "28",
                "43": "68",
                "45": "58",
                "49": "31",
                "51": "29",
                "56": "42",
                "62": "26",
                "64": "0",
                "65": "57",
                "86": "15",
                "114": "41",
                "117": "46",
                "143": "46",
                "162": "4",
                "171": "0",
                "176": "12"
            }
        }
    }
};

let stores = answer.stock.stocks["34"],
    keys = Object.keys(stores);

answer.productName = function() {
    return answer.displayedName.displayedName.value;
};

answer.inStockStores = function() {
    let inStock = [];
    for (var i = 0; i <= keys.length - 1; i++) {
        if (parseInt(stores[keys[i]]) !== 0 ) {
            inStock.push(keys[i]);
        }
    }
    return inStock;
};

answer.maxCountStore = function() {
    let maxCount = {
        "store": parseInt(keys[0]),
        "count": parseInt(stores[keys[0]]),
    };
    for (var i = 1; i <= keys.length - 1; i++) {
        let k = keys[i];
        if (parseInt(stores[k]) > maxCount.count ) {
            maxCount.store = parseInt(k);
            maxCount.count = parseInt(stores[k]);
        }
    }
    return maxCount;
};
