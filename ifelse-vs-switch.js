var color = 'purple';
if (color === 'red') {
    console.log('You are my Red friend');
}
else if (color === 'green') {
    console.log('You are my Green friend');
}
else if (color === 'blue') {
    console.log('You are my Blue friend');
}
else if (color === 'white') {
    console.log('You are my white friend');
}
else if (color === 'purple') {
    console.log('You are my purple friend');
}
else {
    console.log('You are my Black friend');
}

// switch
switch (color) {
    case 'red':
        console.log('You are my Red friend');
        break;
    case 'green':
        console.log('You are my green friend');
        break;
    case 'blue':
        console.log('You are my blue friend');
        break;
    case 'white':
        console.log('You are my white friend');
        break;
    case 'purple':
        console.log('You are my purple friend');
        break;
    default:
        console.log('You are my black friend');
}