function main(params) {
    var name = params.name || 'Mari';
    var place = params.place || 'Vulcan';
    return {greetings:  'Hello from ' + name + ' location: ' + place};
}
