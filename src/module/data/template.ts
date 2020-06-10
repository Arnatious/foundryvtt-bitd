interface ItemDefault {
    name: string;
    description: string;
    long_description: string;
}

interface ItemUpgrade {
    price: number;
    multiples: number;
    taken: number;
}

export interface Ability extends ItemDefault, ItemUpgrade {}

interface Playbook {
    experience_triggers: string[];
    special_abilities: Ability[]
}

export interface Equipment extends ItemDefault, ItemUpgrade {}

export interface CharacterPlaybook extends ItemDefault, Playbook {
    base_skills: {
        hunt: number;
        study: number;
        survey: number;
        tinker: number;
        finesse: number;
        prowl: number;
        skirmish: number;
        wreck: number;
        attune: number;
        command: number;
        consort: number;
        sway: number;
    }
}

export interface Heritage extends ItemDefault {}

export interface Background extends ItemDefault {}

export interface Vice extends ItemDefault {}

export interface Edge extends ItemDefault {}

export interface Flaw extends ItemDefault {}

export interface Cohort extends ItemDefault {
    gang_or_expert: "gang" | "expert";
    type: string[];
    edges: Edge[];
    flaws: Flaw[];
    harm: {
        weakened: boolean;
        impaired: boolean;
        broken: boolean;
        dead: boolean;
    }
    armor: boolean;
}

export interface Contact extends ItemDefault {
    relationship: number;
}

export interface Claim extends ItemDefault, ItemUpgrade {
    index: number;
    connections: {
        up: boolean;
        down: boolean;
        left: boolean;
        right: boolean;
    }
    internal_name: string;
}

export interface CrewPlaybook extends ItemDefault, Playbook {
    claims: Claim[];
    starting_upgrades: Ability[];
}
