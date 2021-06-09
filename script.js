
  const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';
  
  function makeGETRequest(url) {
    return new Promise((resolve) => {
        var xhr;
  
        if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        } else if (window.ActiveXObject) { 
            xhr = new ActiveXObject("Microsoft.XMLHTTP");
        }
    
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                resolve(JSON.parse(xhr.responseText));
            }
        }
    
        xhr.open('GET', url, true);
        xhr.send();
    })
  }
  
  class GoodsItem {
    // ...
      render() {
        return `<div class="goods-item"><h3>${this.product_name}</h3><p>${this.price}</p></div>`;
      }
    }
    
class GoodsList {
// ...
  fetchGoods() {
    return makeGETRequest(`${API_URL}/catalogData.json`);
            }

  render() {
    let listHtml = '';
    this.goods.forEach(good => {
      const goodItem = new GoodsItem(good.product_name, good.price);
      listHtml += goodItem.render();
    });
    document.querySelector('.goods-list').innerHTML = listHtml;
  }
}
const list = new GoodsList();
list.fetchGoods() 
    .then((data) => list.render(data));




