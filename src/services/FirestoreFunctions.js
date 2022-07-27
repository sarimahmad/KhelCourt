import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

export async function GetCollection(collectionName) {
  let dataToReturn = [];
  try {
    const collection = await firestore().collection(collectionName).get();
    await collection.forEach(documentSnapshot => {
      const singleObj = {
        _id: documentSnapshot.id,
        data: documentSnapshot.data(),
      };
      dataToReturn.push(singleObj);
    });
    return dataToReturn;
  } catch (error) {
    return error;
  }
}

export async function updateCollection(
  collectionName,
  docName,
  objectToUpdate,
) {
  console.log('objectToUpdate', objectToUpdate);
  console.log('collectionName', collectionName);
  console.log('docName', docName);
  try {
    const collection = await firestore()
      .collection(collectionName)
      .doc(docName)
      .update(objectToUpdate);
    return collection;
  } catch (error) {
    return error;
  }
}

export async function AuthUser(id) {
  try {
    const document = await firestore().collection('ADMINUSERS').doc(id).get();
    if (document.exists) {
      return document.data();
    } else {
      return null;
      // await firestore()
      //   .collection('USERS')
      //   .doc(id)
      //   .set(user)
      //   .then(() => {
      //     return user;
      //   });
    }
  } catch (error) {
    return error;
  }
}

export async function GetCollectionWithWhere(collectionName, condition) {
  try {
    firestore()
      .collection(collectionName)
      .where(condition)
      .get()
      .then(querySnapshot => {
        return querySnapshot;
      });
  } catch (error) {
    return error;
  }
}

export async function MediaUpload(media, name) {
  try {
    const reference = storage().ref(name);
    const task = reference.putFile(media.path);
    task.then(async () => {
      const downloadURL = await reference.getDownloadURL();
      console.log('downloadURL', downloadURL);
      return downloadURL;
    });
  } catch (error) {
    return error;
  }
}

export async function StoreEvent(id, data) {
  try {
    firestore()
      .collection('EVENTS')
      .doc(id)
      .set(data)
      .then(() => {
        return data;
      });
  } catch (error) {
    return error;
  }
}
export async function UpdateDocValue(collectionId, docId, data) {
  try {
    firestore()
      .collection(collectionId)
      .doc(docId)
      .set(data)
      .then(() => {
        return data;
      });
  } catch (error) {
    return error;
  }
}
export async function EditEvent(id, data) {
  console.log;
  try {
    firestore()
      .collection('EVENTS')
      .doc(id)
      .update(data)
      .then(() => {
        return data;
      });
  } catch (error) {
    return error;
  }
}
