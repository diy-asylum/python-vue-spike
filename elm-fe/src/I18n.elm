module I18n exposing (i18nHelper, languages)

import Dict exposing (Dict)


i18nHelper : Dict String (Dict String String) -> String -> String -> String
i18nHelper languageDict key language =
    let
        entry =
            Dict.get key languageDict

        errorValue =
            "No translation available."

        value =
            case entry of
                Just d ->
                    case Dict.get language d of
                        Just s ->
                            s

                        Nothing ->
                            case Dict.get "en" d of
                                Just s ->
                                    s

                                Nothing ->
                                    errorValue

                Nothing ->
                    errorValue
    in
    value


languages : Dict String (Dict String String) -> List String
languages languageDict =
    case Dict.get "yes" languageDict of
        Just k ->
            Dict.keys k

        Nothing ->
            []
