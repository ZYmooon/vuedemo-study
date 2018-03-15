Axios
    1.安装:
      nom i axios -S
    2.引入,加载:
      import Axios from 'axios'
      Vue.prototype.$axios = Axios
    3.请求:
      created(){
        this.$axios("http://rapapi.org/mockjsdata/31645/index/hotLists?")
            .then(res=>{
              this.listsImg = res.data.lists.img
              console.log(res.data.lists)
            })
            .catch(error=>{
              console.log(error)
            })
    }

  