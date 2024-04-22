import logo from './logo.png';
import video1 from './Barrier.mp4';
import fork from './fork.jpg';

const steps = [
    {
        title: "Detach the barrier from the truck",
        stepNumber: "Étape 1",
        description: "Communication des risques : Les exploitants d’entrepôts doivent préparer et mettre en œuvre un plan écrit de communication des risques (HazCom)." +
            " Les employés susceptibles d’être exposés à des" +
            " produits chimiques dangereux doivent connaître ces produits et savoir comment s’en protéger.",
        video: video1,
        images: [fork]
    },
    {
        title: "Lower the trailer legs",
        description: "Descendre les quatre pattes de la remorque, les ajuster afin que la barrière soit à niveau et que les roues ne touchent pas le sol.",
        video: video1,
        images: [logo,logo]
    },
    {
        title: "Remove the retaining pins",
        description: "Enlever les goupilles de retenue du bras de la barricade. Une fois la barrière enlever, remettre les goupilles en place pour ne pas les perdre.",
        video: "Barrier.mp4",
        images: ["logo.png", "logo.png"]
    },
    {
        title: "Install the barrier arm",
        description: "Installer le bras de la barricade à l’endroit prévu à cet effet, ajouter l’attache pour la maintenir en place et installer le drapeau à l’aide des deux pinces à l’extrémité.",
        video: "Barrier.mp4",
        images: ["logo.png"]
    },
    // Add more steps as needed
];

export default steps;