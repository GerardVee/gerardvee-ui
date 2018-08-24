import Autosuggest from 'react-autosuggest';

import styles from './Autosuggest.styles';

const link = (title) => `https://en.wikipedia.org/wiki/${ title.replace(/\s/g, '_') }`;

const strip = (html) =>
{
    let cont = document.createElement('DIV');
    cont.innerHTML = html;
    return cont.textContent || cont.innerText || '';
};

const Suggestion = ({ title, snippet, wordcount, className }) => (
    <span className='wikiviewer-autosuggest-suggestion-box' onClick={ () => window.location.href = link(title) }>
        <h2>{ title }</h2><span>[{ wordcount }]</span> - { strip(snippet) }
    </span>
);

const inputProps = (props) => (
{
    placeholder: 'linux server',
    value: props.value,
    onChange: (e, value) => props.onChange(e, value),
});

export default ({ value, suggestions, onSuggestionsClearRequested, onSuggestionsFetchRequested, onChange }) => (
    <Autosuggest
        theme=
        {{
            input: styles.input,
            container: styles.container,
            suggestionsContainerOpen: styles.suggestionsContainerOpen,
            suggestionsList: styles.suggestionsList,
            suggestion: 'wikiviewer-autosuggest-suggestion'
        }}
        suggestions={ suggestions }
        onSuggestionsFetchRequested={ (value) => onSuggestionsFetchRequested(value) }
        onSuggestionsClearRequested={ (value) => onSuggestionsClearRequested() }
        getSuggestionValue={ (suggestion) => suggestion.name }
        renderSuggestion={ (props) => <Suggestion { ...props } /> }
        inputProps={ inputProps({ value, onChange }) }
    />
);