import { Text, View } from 'react-native';

import { useSession } from '../../Context/authContext';
import { spotifyRequest } from '../../APICommunication/api_communicator';


export default function Index() {
  const { signOut, session } = useSession();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text
        onPress={() => {
          // The `app/(app)/_layout.tsx` will redirect to the sign-in screen.
          spotifyRequest("/recommendations/available-genre-seeds")
            .then((response) => {
              console.log(response);
            })
            .catch((error) => {
              console.log(error);
            });
        }}>
        Get genres
      </Text>
    </View>
  );
}
