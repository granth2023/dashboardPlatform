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
                    label: "location",
                    to: "location",
                    children: [
                        {
                            label: 'City',
                            to: 'city',
                        },
                    ]
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
 