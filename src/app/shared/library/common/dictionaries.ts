export const NavVariants = {
    temporary: `temporary`,
    permanent: `permanent`,
}

export const Roles = {
    QuizTaker: `Quiz Taker`,
    QuizMaker: `Quiz Maker`,
}

export const GeoDataFormTypes = {
    Locations: `Locations`,
    Coordinates: `Coordinates`,
}

export const GeoTypes = {
    Lat: `lat`,
    Lon: `lon`,
    Loc: `loc`,
}

export const Difficulties = {
    Easy: `Easy`,
    Medium: `Medium`,
    Hard: `Hard`,
    Extreme: `Extreme`,
}

export const States = {
    Ready: `Ready`,
    Error: `Error`,
    Cancel: `Cancel`,
    Active: `Active`,
    Success: `Success`,
    Loading: `Loading`,
    Disabled: `Disabled`,
}

export const MathTopics = {
    Algebra: `Algebra`,
    Geometry: `Geometry`,
    Arithmetic: `Arithmetic`,
}

export const ProgrammingTopics = {
    Python: `Python`,
    JavaScript: `JavaScript`,
}

export const ScienceTopics = {
    Geology: `Geology`,
    Biology: `Biology`,
    Chemistry: `Chemistry`,
    Astronomy: `Astronomy`,
}

export const LanguageArtsTopics = {
    Grammar: `Grammar`,
    Spelling: `Spelling`,
    Literature: `Literature`,
    Comprehension: `Comprehension`,
}

export const SocialStudiesTopics = {
    History: `History`,
    Geography: `Geography`,
    Anthropology: `Anthropology`,
}

export const Subjects = {
    Math: {
        name: `Math`,
        topics: Object.values(MathTopics),
    },
    Science: {
        name: `Science`,
        topics: Object.values(ScienceTopics),
    },
    Programming: {
        name: `Programming`,
        topics: Object.values(ProgrammingTopics),
    },
    Language_Arts: {
        name: `Language Arts`,
        topics: Object.values(LanguageArtsTopics),
    },
    Social_Studies: {
        name: `Social Studies`,
        topics: Object.values(SocialStudiesTopics),
    },
}

// export const Topics = {
//     ...MathTopics,
//     ...ProgrammingTopics,
//     ...ScienceTopics,
//     ...SocialStudiesTopics,
//     ...LanguageArtsTopics,
// }

export const GoogleMapZoomLevels = {
    EnableCustomZoom: `!1m14!1m12!1m3!1d132`,
    Street: `!1m14!1m12!1m3!1d132` + ``,
    Neighborhood : `!1m14!1m12!1m3!1d132` + `4`,
    City: `!1m14!1m12!1m3!1d132` + `44`,
    Region: `!1m14!1m12!1m3!1d132` + `444`,
    State: `!1m14!1m12!1m3!1d132` + `4444`,
    Coast: `!1m14!1m12!1m3!1d132` + `44444`,
    World: ``,
    x300: `!1m14!1m12!1m3!1d132` + `444444`,
}