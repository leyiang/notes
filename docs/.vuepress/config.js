const { defaultTheme } = require("vuepress");

function capitalize(s) {
    if( s === "php" ) {
        return "PHP";
    }

    s = s.toString();
    return s[0].toUpperCase() + s.slice(1);
}

const getSidebar = () => {
    const fs = require("fs");

    let list = fs.readdirSync(__dirname + "/../");

    list = list.filter(name => {
        return ! [".vuepress", "README.md"].includes(name);
    });

    list = list.map(name => {
        const files = fs.readdirSync(`${__dirname}/../${ name }/`);
        let first = files[0];
        first = first.split(".")[0];


        return {
            text: capitalize(name),
            link: `/${ name }/${ first }`,
            children: files.map(file => {
                return `/${name}/${file}`
            })
        }
    });

    return list;
};

module.exports = {
    title: "Yiang's Notes",
    description: "This site stores all my notes.",
    base: '/notes/',
    theme: defaultTheme({
        navbar: [
            {
                text: "Home",
                link: "/"
            }
        ],

        sidebar: {
            "/": getSidebar()
        }
    })
}
