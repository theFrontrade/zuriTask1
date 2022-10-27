import React from 'react'
const Links = () =>{
    return(
        <div>
            {linkList.map((item)=>
                <a href={item.link} target="_blank" rel="noreferrer" className="link-button" key={item.id}> {item.name}</a>
            )}
            <div className="link-img-wrap"> 
                <a href="https://github.com/thefrontrade" target="_blank" rel="noreferrer"><img src="/img/slack.png" alt="img"/></a>
                <a href="https://github.com/thefrontrade" target="_blank" rel="noreferrer"><img src="/img/icon.png" alt="img"/></a>
            </div>
        </div>
    )
}
export default Links

export const linkList = [
    {
        "id" : "twitter",
        "name" : "Twitter link",
        "link" : "https://twitter.com/theFrontrade"
    },
    {
        "id" : "btn__zuri",
        "name" : "Zuri Team",
        "link" : "https://training.zuri.team/"
    },
    {
        "id" : "books",
        "name" : "Zuri Books",
        "link" : "https://books.zuri.team/"
    },
    {
        "id" : "books__python",
        "name" : "Python Books",
        "link" : "https://books.zuri.team/python-for-beginners?ref_id=<samuel_adeniyi>"
    },
    {
        "id" : "pitch",
        "name" : "Background Checks for Codes",
        "link" : "https://background.zuri.team/"
    },
    {
        "id" : "books__design",
        "name" : "Design Books",
        "link" : "https://books.zuri.team/design-rules"
    }
]