import { db, storage, auth } from './config';
import { 
  collection, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc, 
  getDocs, 
  query, 
  where,
  orderBy 
} from 'firebase/firestore';
import { 
  ref, 
  uploadBytes, 
  getDownloadURL, 
  deleteObject 
} from 'firebase/storage';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';

// Funkcje do zarządzania produktami
export const getProducts = async (category) => {
  try {
    let productsQuery;
    
    if (category) {
      productsQuery = query(
        collection(db, 'products'), 
        where('category', '==', category),
        orderBy('createdAt', 'desc')
      );
    } else {
      productsQuery = query(
        collection(db, 'products'),
        orderBy('createdAt', 'desc')
      );
    }
    
    const snapshot = await getDocs(productsQuery);
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error("Błąd podczas pobierania produktów:", error);
    throw error;
  }
};

export const addProduct = async (productData, imageFile) => {
  try {
    // Jeśli przekazano plik obrazu, najpierw go wgraj
    let imageUrl = '';
    if (imageFile) {
      const storageRef = ref(storage, `product-images/${Date.now()}_${imageFile.name}`);
      await uploadBytes(storageRef, imageFile);
      imageUrl = await getDownloadURL(storageRef);
    }
    
    // Dodaj produkt do Firestore
    const docRef = await addDoc(collection(db, 'products'), {
      ...productData,
      imageUrl,
      createdAt: new Date()
    });
    
    return {
      id: docRef.id,
      ...productData,
      imageUrl
    };
  } catch (error) {
    console.error("Błąd podczas dodawania produktu:", error);
    throw error;
  }
};

export const updateProduct = async (productId, productData, imageFile) => {
  try {
    // Jeśli przekazano nowy plik obrazu, najpierw go wgraj
    let imageUrl = productData.imageUrl;
    
    if (imageFile) {
      // Jeśli istnieje już zdjęcie, usuń je
      if (productData.imageUrl) {
        try {
          const oldImageRef = ref(storage, productData.imageUrl);
          await deleteObject(oldImageRef);
        } catch (error) {
          console.error("Błąd podczas usuwania starego obrazu:", error);
          // Kontynuujemy nawet jeśli nie udało się usunąć starego obrazu
        }
      }
      
      const storageRef = ref(storage, `product-images/${Date.now()}_${imageFile.name}`);
      await uploadBytes(storageRef, imageFile);
      imageUrl = await getDownloadURL(storageRef);
    }
    
    // Aktualizuj produkt w Firestore
    const productRef = doc(db, 'products', productId);
    await updateDoc(productRef, {
      ...productData,
      imageUrl,
      updatedAt: new Date()
    });
    
    return {
      id: productId,
      ...productData,
      imageUrl
    };
  } catch (error) {
    console.error("Błąd podczas aktualizacji produktu:", error);
    throw error;
  }
};

export const deleteProduct = async (productId, imageUrl) => {
  try {
    // Usuń obraz z Storage, jeśli istnieje
    if (imageUrl) {
      try {
        const imageRef = ref(storage, imageUrl);
        await deleteObject(imageRef);
      } catch (error) {
        console.error("Błąd podczas usuwania obrazu:", error);
        // Kontynuujemy nawet jeśli nie udało się usunąć obrazu
      }
    }
    
    // Usuń produkt z Firestore
    const productRef = doc(db, 'products', productId);
    await deleteDoc(productRef);
    
    return productId;
  } catch (error) {
    console.error("Błąd podczas usuwania produktu:", error);
    throw error;
  }
};

// Funkcje autentykacji
export const registerAdmin = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    console.error("Błąd podczas rejestracji administratora:", error);
    throw error;
  }
};

export const loginAdmin = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    console.error("Błąd podczas logowania administratora:", error);
    throw error;
  }
};

export const logoutAdmin = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Błąd podczas wylogowywania administratora:", error);
    throw error;
  }
};