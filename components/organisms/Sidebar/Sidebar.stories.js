import React from "react"
import { Sidebar } from "./Sidebar"

const SidebarStory = {
    title: "Components/Sidebar Menu",
    component: Sidebar,
}

const Template = (args) => <Sidebar {...args} />

export const SideBar = Template.bind({})
Sidebar.args = {
    // appearance: 'default',
    // required: true,
    // type: "Password",
    // placeholder: "Email"
}

export default SidebarStory
