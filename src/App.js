import React, {Component} from 'react';
import SearchBar from "./components/search_bar";
import './App.css';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from "./components/video_details";


const API_KEY = 'AIzaSyB5SpSEkS-Ip5elSDt46vVz-WxiK2zazGU';

class App extends Component{
    constructor(props) {
        super(props)
        this.state= {videos: [], selectedVideo: null}
        this.videoSearch('sports')

    }
    videoSearch(term){
    YTSearch({key: API_KEY, term: 'songs'}, (videos) => {
        this.setState({videos: videos, selectedVideo: videos[0]})
        console.log(videos);
    })
    }
    render() {
        return (
            <div className="App">
                <SearchBar onSearchChange={term=>this.videoSearch(term)}/>
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList onSelectedVideo={selectedVideo=> this.setState(selectedVideo)} videos={this.state.videos} />
            </div>
        );
    }

}

export default App;
