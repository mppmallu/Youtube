import { LightningElement, track } from 'lwc';
import searchYouTube from '@salesforce/apex/YouTubeController.searchYouTube';

export default class YouTubeSearchPlayer extends LightningElement {
    @track searchQuery = '';
    @track videos = [];
    @track selectedVideoId = '';

    handleSearchQueryChange(event) {
        this.searchQuery = event.target.value;
    }

    handleSearch() {
        if (this.searchQuery) {
            searchYouTube({ query: this.searchQuery })
                .then(result => {
                    this.videos = result.items;
                    this.selectedVideoId = ''; // Clear the selected video when new search is performed
                })
                .catch(error => {
                    console.error('Error fetching videos: ', error);
                });
        }
    }

    handleVideoSelect(event) {
        event.preventDefault(); // Prevent default anchor behavior
        this.selectedVideoId = event.currentTarget.dataset.videoId;
    }

    get iframeSrc() {
        return this.selectedVideoId ? `https://www.youtube.com/embed/${this.selectedVideoId}` : '';
    }
}