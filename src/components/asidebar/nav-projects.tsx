import { SidebarGroup, SidebarGroupLabel } from "../ui/sidebar"

export const function NavProjects() {



    return (
        <>
            <SidebarGroup>
                <SidebarGroupLabel>
                    <span>Projects</span>
                    <button onClick={onOpen}>
                        
                    </button>
                </SidebarGroupLabel>
            </SidebarGroup>
        </>
    )
}