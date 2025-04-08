const base = {
    get() {
        return {
            url : "http://localhost:8080/ssm374e5/",
            name: "ssm374e5",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssm374e5/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "网页小游戏交流论坛"
        } 
    }
}
export default base
