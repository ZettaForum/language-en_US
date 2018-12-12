
export const translations = {
    "404page": {
        "page_not_found": "The page you visit does not exist.",
        "please": "Please ",
        "return": "return",
        "or_search_for_related_content": " or search for related content.",
    },
    "search-box": {
        "placeholder": "Search for questions, topics, or people",
        "search": "Search",
    },
}

export default translations

if (top && top.ZettaForum) {
    top.ZettaForum.addTranslations("en_US", translations)
}
