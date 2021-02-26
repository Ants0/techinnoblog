var url = (window.location.href)
var splitUrl = url.split("")

// What store
url = ""
for (i = 0; i < 6; i++) {
    url += splitUrl[i + 12]
}

var product = ""
// Amazon
if (url == "amazon") { 
    for (i = 0; i !== -1; i++) {
        if (splitUrl[i + 23] == "/") {
            i == -1
        }
        else {
            product += splitUrl[i + 23]
        }
    }
}

// Target
if (url == "target") {
    // word = "hi"
}

// Walmart
if (url == "walmar") {
    // word = "hi"
}


alert(url)
