module I18n exposing (i18n, languages)

import Dict exposing (Dict)
import Json.Decode as D


rawLanguageDict : String
rawLanguageDict =
    "{ \"back\": { \"en\": \"Back\", \"es\": \"Previo\"}, \"next\": { \"en\": \"Next\", \"es\": \"Siguiente\"},    \"currently-in-us\": { \"en\": \"Do you currently reside in the US?\", \"es\": \"¿Reside actualmente en los EE. UU.?\"}, \n    \"yes\": { \"en\": \"Yes\", \"es\": \"Sí\"},\n    \"no\":{ \"en\": \"No\", \"es\": \"No\"}}"


i18n : String -> String -> String
i18n key language =
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


languages : List String
languages =
    case Dict.get "yes" languageDict of
        Just k ->
            Dict.keys k

        Nothing ->
            []


languageDict : Dict String (Dict String String)
languageDict =
    case D.decodeString (D.dict (D.dict D.string)) rawLanguageDict of
        Ok x ->
            x

        Err _ ->
            Dict.empty
