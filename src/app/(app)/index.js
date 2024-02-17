import { Text, View } from 'react-native';

import { useSession } from '../../Context/authContext';
import { useSpotifyRequest } from '../../APICommunication/api_communicator';


export default function Index() {
  const { signOut, session } = useSession();
  const [data, fetchData] = useSpotifyRequest(
    {
      endpoint: "/recommendations/available-genre-seeds",
      method: "GET",
      costum_headers: {},
      body: null,
      fetchDirectly: false,
    });
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text
        onPress={() => {
          // The `app/(app)/_layout.tsx` will redirect to the sign-in screen.
          signOut();
        }}>
        signOut
      </Text>
    
      
    </View>
  );
}
