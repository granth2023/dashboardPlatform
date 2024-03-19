export const menus = [
    {
        label: "Home",
        to: "/",
    },
    {
    label: "Profile",
    to: "/profile",
    children: [
        {
            label: "Details",
            to: "details",
            children: [
                {
                    lbale: "location",
                    to: "location",
                }
            ]
        }
    ]
    },
    {
        label: "security",
        to: "security",
        children: [
            {
                label: "login",
                to: "login",
            },
            {
                label: "Register",
                to: "register",
            }
        ]

    }
]

export default menus;
 