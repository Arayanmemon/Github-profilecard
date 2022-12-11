const app = Vue.createApp({
    data(){
        return{
            avatar_url: "",
            bio: "",
            blog: "",
            followers: "",
            following: "",
            username: "",
            login: "",
            url: "",
            public_repos: "",
            repos: []
        }
    },
    methods: {
        async getUser(){
            await fetch('https://api.github.com/users/'+ document.getElementById('search-bar').value)
            .then((res) => res.json())
            .then((data) => {
                this.avatar_url = data['avatar_url']
                this.bio = data['bio']
                this.blog = data['blog']
                this.followers = data['followers']
                this.following = data['following']
                this.login = data['login']
                this.username = data['name']
                this.url = data['html_url']
                this.public_repos = data['public_repos']
                document.getElementById('card').style.display = "block";
            });
            
            await fetch('https://api.github.com/users/'+document.getElementById('search-bar').value+'/repos')
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                for (let i = 0; i < 10; i++) {
                    this.repos.push(data[i]);
                }

            });
        },
    },
});

app.mount('#root')