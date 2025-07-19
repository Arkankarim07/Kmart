import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import { useEffect } from 'react';
WebBrowser.maybeCompleteAuthSession()
const GoogleApi = (onSuccess: (idToken: string) => void) => {
    const [request, response, promptAsync] = Google.useAuthRequest(
        {
            androidClientId: '297488522726-l99dtu862pj8f60a99n1mg659f04n71g.apps.googleusercontent.com',
            webClientId: '297488522726-58op6svpl2dqt7i1l2mdi1p82b1sphn4.apps.googleusercontent.com',
        },

    );

    useEffect(() => {
        if (response?.type === "success") {
            const idToken = response.authentication?.idToken
            if (idToken) {
                onSuccess(idToken)
            }
        }
    }, [response])
    return { promptAsync, request }
}

export default GoogleApi