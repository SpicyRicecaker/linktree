import { Component, For } from 'solid-js';
import styles from './App.module.css';


import { TbBrandGithub, TbBrandTwitter, TbBrandYoutube, TbBrandInstagram } from 'solid-icons/tb';

const App: Component = () => {
    const links = [
        { name: "Github", url: "https://github.com/SpicyRicecaker", icon: <TbBrandGithub/> },
        { name: "YouTube", url: "https://www.youtube.com/channel/UCf2r-fNNJjfRc9cu-nRbNJA", icon: <TbBrandYoutube/> },
        { name: "Twitter", url: "https://twitter.com/Awesomeisgolden", icon: <TbBrandTwitter/> },
        { name: "Instagram", url: "https://www.instagram.com/spicy_ricecaker/", icon: <TbBrandInstagram/> }
    ];
    // return <div>{links[0].icon}</div>;
    return (
        <div class={styles.App}>
            <header class={styles.header}>
                <h1>@spicy_ricecaker</h1>
            </header>
            <ul class={styles.list}>
                <For each={links}>
                    {(link) => {
                        return <li><a class={styles.link} href={link.url}>
                                {link.icon}
                                <span>{link.name}</span>
                        </a></li>;
                    }}
                </For>
            </ul>
        </div>
    );
};

export default App;
