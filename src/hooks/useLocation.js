import { useState, useEffect } from 'react';
import { Accuracy, requestPermissionsAsync, watchPositionAsync } from 'expo-location';

export default (shouldTrack, callback) => {

    const [err, setErr] = useState(null);
    //const [subscriber, setSubscriber] = useState(null);    

    useEffect(() => {

        let susbcriber;

        const startWatching = async () => {
            try {
                await requestPermissionsAsync();
                susbcriber = await watchPositionAsync({
                    accuracy: Accuracy.BestForNavigation,
                    timeInterval: 1000,
                    distanceInterval: 10
                }, (location) => {
                    callback
                });

                //setSubscriber(sub);

                return () => {
                    if (subscriber) {
                        subscriber.remove();
                    }
                };

            } catch (error) {
                setErr(e);
            }
        };

        if (shouldTrack)
            startWatching();
        else {
            if (subscriber) {
                subscriber.remove();
            }
            setSubscriber = null;
        }
    }, [shouldTrack, callback])

    return [err];
};