const app = Vue.createApp({
    data() {
        return {
            check1: false,
            check2: false,
            order: 0,
            list: [
                { name: 'Michael<br>スマホケース', price: 1980, image: 'images/01.jpg', shipping: 0, isSale: true },
                { name: 'Raphael<br>スマホケース', price: 3980, image: 'images/02.jpg', shipping: 0, isSale: true },
                { name: 'Gabriel<br>スマホケース', price: 2980, image: 'images/03.jpg', shipping: 0, isSale: true },
                { name: 'Uriel<br>スマホケース', price: 1580, image: 'images/04.jpg', shipping: 0, isSale: true },
                { name: 'Ariel<br>スマホケース', price: 2580, image: 'images/05.jpg', shipping: 0, isSale: false },
                { name: 'Azrael<br>スマホケース', price: 1280, image: 'images/06.jpg', shipping: 0, isSale: false },
            ]
        }
    },
    computed: {
        filteredList() {
            const app = this;
            const filteredList = this.list.filter(function(item){
                let show = true;
                if(app.check1){
                    if(!item.isSale) {
                        show = false;
                    }
                }
                if(app.check2) {
                    if(item.shipping !== 0) {
                        show = false;
                    }
                }
                return show;
            });
            filteredList.sort(function(a,b){
                if(app.order === 1) {
                    return 0;
                }
                else if(app.order === 2) {
                    return a.price - b.price;
                }
            });
            return filteredList;
        },
        count() {
            return this.filteredList.length;
        }
    }
})
app.config.globalProperties.$filters = {
    number_format(val){
        return val.toLocaleString();
    }
}
const vm = app.mount('#app');
