const { defaultTheme } = require("vuepress");

const getLinuxSidebar = () => {
    return {
        text: "Linux",
        link: "/linux/xrandr",
        children: [
            "/linux/xrandr.md",
            "/linux/configure.md",
        ]
    }
}

const getPhpSidebar = () => {
    return {
        text: "PHP",
        link: "/php/datetime",
        children: [
            "/php/datetime.md",
        ]
    }
}

const getNetworking = () => {
    return {
        text: "Networking",
        link: "/networking/dns",
        children: [
            "/networking/dns.md",
        ]
    }
}


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
            "/": [
                getLinuxSidebar(),
                getPhpSidebar(),
                getNetworking()
            ],
        }
    })
}
