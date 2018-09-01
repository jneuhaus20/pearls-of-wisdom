'use strict';

module.exports = function(Pearl) {

    Pearl.random = function() {
        const promise = new Promise((resolve, reject) => {

            const pearlCollection = Pearl.getDataSource().connector.collection(Pearl.modelName);
            pearlCollection.aggregate({
                $sample: {
                    size: 1
                }
            }, function (err, groupByRecords) {
                if (err) {
                    reject(err);
                } else {
                    resolve(groupByRecords.next());
                }
            });

        });

        return promise;
    }

    Pearl.remoteMethod('random', {
        description: 'Retrieves a random Pearl',
        returns: {arg: 'pearl', type: Pearl}
    });
};
