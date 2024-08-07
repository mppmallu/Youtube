public with sharing class YouTubeController {
    @AuraEnabled(cacheable=true)
    public static Object searchYouTube(String query) {
        String apiKey = 'AIzaSyCOAZyQYNVpwNNlpUKNgIkhz0nFYyJIGdk';
        String searchUrl = 'https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=' + EncodingUtil.urlEncode(query, 'UTF-8') + '&key=' + apiKey;
        
        Http http = new Http();
        HttpRequest request = new HttpRequest();
        request.setEndpoint(searchUrl);
        request.setMethod('GET');
        
        HttpResponse response = http.send(request);
        if (response.getStatusCode() == 200) {
            return (Map<String, Object>) JSON.deserializeUntyped(response.getBody());
        } else {
            throw new AuraHandledException('Error calling YouTube API: ' + response.getStatus());
        }
    }
}