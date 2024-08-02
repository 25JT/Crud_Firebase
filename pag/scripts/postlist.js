const postlist = document.querySelector('.posts')

export const setupPosts = (data) => {
    if (data.length){
        let html = ''
        //recorres
        data.forEach(doc => {
            console.log(doc)
            const post = doc.data()
            const li =`
            <li class = "list-group-item list-group-item-action">
            <h5> ${post.first}</h5>
            <p> ${post.last}</p>
            <p> ${post.born}</p>
            </li>
            `
            html += li
        });
        postlist.innerHTML = html
    

    }else {
        postlist.innerHTML='<h1> no hay post</h1>'
    }
}
