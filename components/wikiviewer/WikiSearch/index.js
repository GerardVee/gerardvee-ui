import { Component } from 'react';

import post from '../../../lib/post';
import Autosuggest from './Autosuggest';

const api = 'https://api.gerardvee.com/';

export default class extends Component
{
    state =
    {
        input: '',
        suggestions: [],
        isLoading: false,
        error: false,
    };

    async loadSuggestions(value)
    {
        this.setState({ isLoading: true });
        const res = await fetch(api + 'site/wiki', post({ query: value }));
        const wikiData = await res.json();
        const suggestions = wikiData.query.search;
        this.setState({ isLoading: false, suggestions, error: suggestions.length <= 0 });
    }

    onChange(event, { newValue })
    {
        this.setState({ input: newValue });
    }

    onSuggestionsClearRequested()
    {
        this.setState({ suggestions: [] });
    }

    async onSuggestionsFetchRequested({ value })
    {
        this.loadSuggestions(value);
    }

    render()
    {
        const { input, suggestions, isLoading, error } = this.state;
        return (
            <>
             <div className='row halign'>
                    <Autosuggest value={ input } suggestions={ suggestions } onSuggestionsClearRequested={ () => this.onSuggestionsClearRequested() }
                        onSuggestionsFetchRequested={ (value) => this.onSuggestionsFetchRequested(value) } onChange={ (e, change) => this.onChange(e, change) } />
                </div>
                { isLoading &&
                    <div className='row halign'>
                        <i className='wikiviewer-loading-spin fa fa-circle-o-notch fa-spin fa-2x fa-fw' />
                    </div>
                }
                { error &&
                    <div className='row halign'>
                        <p className='wikiviewer-no-results'>No Results</p>
                    </div>
                }
            </>
        );
    }

}