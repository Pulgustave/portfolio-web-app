import projectPlaceholder from '../assets/project_placeholder.png';
import rwindImage from '../assets/25007_RWIND.jpg';
import LV_THEVERYMANY_Milan1 from '../assets/LV_THEVERYMANY_Milan1.webp';


export const projects = [
    { 
        id: 1, 
        title: 'Computational Engineer for TVM at CRAFT engineering studio', 
        categories: ['Computational Design', 'Structural Design', 'Confidential'], 
        description: 'Projects include Pavilion Nomad (Milan 2023), TheVeryMany London, and TheVeryMany Singapour. These projects and their specific structural engineering details are confidential.',
        detailImages: [] // Empty array = no pictures shown on the details page
    },
    { 
        id: 4, 
        title: 'Issy les Moulineaux', 
        categories: ['Structural Design'], 
        image: projectPlaceholder, 
        description: 'Description for Issy les Moulineaux goes here.',
        detailImages: [projectPlaceholder, projectPlaceholder, projectPlaceholder]
    },
    { 
        id: 5, 
        title: 'Vaugirard', 
        categories: ['Structural Design'], 
        image: projectPlaceholder, 
        description: 'Description for Vaugirard goes here.',
        detailImages: [projectPlaceholder, projectPlaceholder, projectPlaceholder]
    },
    { 
        id: 6, 
        title: 'Ginsbourg Elephant', 
        categories: ['Structural Design'], 
        image: rwindImage, 
        description: 'Description for Ginsbourg Elephant goes here.',
        detailImages: [projectPlaceholder, projectPlaceholder, projectPlaceholder]
    },
    { 
        id: 10, 
        title: 'Stars', 
        categories: ['Structural Design', 'Computational Design'], 
        image: projectPlaceholder, 
        description: 'Description for Stars goes here.',
        detailImages: [projectPlaceholder, projectPlaceholder, projectPlaceholder]
    },
    { 
        id: 7, 
        title: 'Ursa Major', 
        categories: ['Structural Design'], 
        image: projectPlaceholder, 
        description: 'Description for Ursa Major goes here.',
        detailImages: [projectPlaceholder, projectPlaceholder, projectPlaceholder]
    },
    { 
        id: 8, 
        title: 'Revit Add-ins', 
        categories: ['Programming', 'Automations'], 
        image: projectPlaceholder, 
        description: 'Description for Revit Add-ins goes here.',
        detailImages: [projectPlaceholder, projectPlaceholder, projectPlaceholder]
    },
    { 
        id: 9, 
        title: 'Odyssey - Sanford Biggers Studio', 
        categories: ['Computational Design', 'Structural Engineering', 'Portland, OR'], 
        image: projectPlaceholder, 
        description: 'Odyssey is a pair of fully suspended sculptures by Sanford Biggers Studio, located in the new mass-timber terminal at Portland International Airport. The artwork consists of custom DiBond aluminum graphic panels supported by lightweight aluminum tube frames and hung from near-invisible stainless steel aircraft cables to create a seamless illusion of floating above deplaning passengers. \n\nMy work as a structural engineer at CRAFT focused on the FEA modeling of the suspension system, utilizing linear and nonlinear large-deformation analysis to simulate the delicate balance of a suspended mass on tension-only cables under gravity and seismic loads. Positioned in a seismically active zone with proximity to full-height glazing walls, the sculptures required a highly coordinated bracing strategy. We designed diagonal cables to prevent lateral sway toward the glass, while allowing controlled free-sway in all other directions, carefully verified against the airport\'s 3D BIM to avoid clashes with architectural finishes. Custom connection brackets were also developed and analyzed using solid element analysis to securely attach the artwork to both the delicate aluminum frames and the massive timber ceiling trellis. \n\nFabrication: JunoWorks | Engineering: CRAFT Engineering Studio',
        detailImages: [projectPlaceholder, projectPlaceholder, projectPlaceholder]
    },
];
