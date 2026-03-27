import projectPlaceholder from '../assets/project_placeholder.png';
import rwindImage from '../assets/25007_RWIND.jpg';
import LV_THEVERYMANY_Milan1 from '../assets/LV_THEVERYMANY_Milan1.webp';


export const projects = [
    { 
        id: 1, 
        title: 'Computational Engineer for TVM at CRAFT engineering studio', 
        categories: ['Computational Design', 'Structural Design', 'Confidential'], 
        image: LV_THEVERYMANY_Milan1, // Kept the thumbnail per your request
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
        title: 'Odyssey', 
        categories: ['Computational Design', 'Structural Engineering'], 
        image: projectPlaceholder, 
        description: 'Odyssey is a pair of large suspended sculptures by Sanford Biggers Studio, installed above the airline gates of Portland International Airport new mass-timber terminal. The lightweight aluminum tube frames, clad in custom DiBond graphic panels and hung from near-invisible stainless steel aircraft cables, were engineered to create the illusion of floating. My work focused on the structural design and FEA modeling of the suspension system, using linear and nonlinear large-deformation analysis to simulate cable behavior under gravity and seismic loads. Given the airport location in a seismically active zone, a key challenge was developing a bracing strategy that prevented the sculptures from impacting the adjacent full-height glazing walls while allowing controlled free-sway in other directions. Custom connection brackets, attaching cables to both the aluminum frames and the mass timber structure, were also designed and verified through solid element analysis, coordinated closely against the building 3D BIM model to avoid clashes with architectural finishes.',
        detailImages: [projectPlaceholder, projectPlaceholder, projectPlaceholder]
    },
];
