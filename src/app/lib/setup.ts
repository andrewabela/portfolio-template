"use server";

function get_setup() {
    return {
        "hostname": "https://example.com",
        "intro": "Edit src/app/lib/setup.ts to customize this portfolio template.",
        "first_name": "Name",
        "last_name": "Surname",
        "personal_links": [
            {
                "name": "Email",
                "logo": "mail.svg",
                "url": "mailto:example@example.example"
            },
            {
                "name": "GitHub",
                "logo": "github-mark-white.svg",
                "url": "https://example.com"
            },
            {
                "name": "Unsplash",
                "logo": "unsplash.svg",
                "url": "https://example.com"
            }
        ],
        "projects": [
            {
                "name": "Portfolio Template",
                "short_description": "An open source portfolio website template.",
                "description": [
                    "# Markdown formatted description",
                    "### Use *markdown* to format the description of your project.",
                    "Separate **newlines** by adding a new string to the array."
                ],
                "primary_image": "portfolio/Feature_graphic.jpg",
                "images": [
                    "portfolio/0.png",
                    "portfolio/1.png",
                    "portfolio/2.png",
                    "portfolio/3.png",
                ],
                "tags": [
                    "Tag 1",
                    "Tag 2",
                    "Tag 3"

                ],
                "links": [
                    {
                        "name": "Link 1",
                        "url": "https://example.com"
                    }
                ],
                "card_color": "blue"

            },
            {
                "name": "Demo Project 2",
                "short_description": "Demo Project 2 short description.",
                "description": [
                    "**Demo Project 2** description."
                ],
                "primary_image": "demo_project/Feature_graphic.jpg",
                "card_color": "orange"
            }

        ],


    }
}

export async function get_hostname() {
    return get_setup().hostname;
}

export async function get_first_name() {
    return get_setup().first_name;
}

export async function get_last_name() {
    return get_setup().last_name;
}

export async function get_intro() {
    return get_setup().intro;
}

export async function get_personal_links() {
    return get_setup().personal_links;
}

export async function get_number_of_projects() {
    return get_setup().projects.length;
}

export async function get_projects_overview() {
    return get_setup().projects.map(project => {
        return {
            "name": project.name,
            "short_description": project.short_description,
            "tags": project.tags,
            "card_color": project.card_color
        }
    });
}

export async function get_project(id: number): Promise<string> {
    // return get_setup().projects[id];
    // try {
        const data = get_setup().projects[id];
        if (data === undefined) {
            throw new Error('Project not found');
        }
        return JSON.stringify(data);
}