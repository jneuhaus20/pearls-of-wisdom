
const data = require('../../data/effective-engineer/effective-engineer.json');

module.exports = app => {
    console.log("MONGODB_URI:", process.env.MONGODB_URI);
    
    console.log('Importing initial data to in-mem db...');

    const attrModel = app.models.Attribution;
    const attr = data.attribution;
    
    console.log('Importing attribution...');
    attrModel.upsert(attr, (err, attrObj) => {
        console.log(err);
        console.log('... Success! Created attribution: ', attrObj);

        const pearlModel = app.models.Pearl;
        console.log('Importing pearls...');

        data.pearls
        .map(pearl => ({...pearl, attributionId: attrObj.id}))
        .forEach(pearl => {
            console.log('Importing a pearl...');
            pearlModel.upsert(pearl, (err, obj) => console.log(err || '... Success!'));
        });
    });

    console.log('Finished importing initial data');
}