import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';



export default function Plogin() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Votre compte</Text>
      <Text style={styles.subtitle}>
        Inscrivez-vous pour pouvoir planifier vos futures demandes et trouver un prestataire qualifié
      </Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>S'inscrire</Text>
      </TouchableOpacity>

      <View style={styles.loginSection}>
        <Text style={styles.loginText}>Avez-vous deja un compte?</Text>
        <TouchableOpacity>
          <Text style={styles.loginLink}>Connection</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.section}>
        <Icon name="lock" size={20} color="#0078FA" />
        <Text style={styles.sectionText}>Avec DéménéGo</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.section}>
        <Icon name="question-circle" size={20} color="#0078FA" />
        <Text style={styles.sectionText}>Centre d'aide</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.section}>
        <Icon name="shield" size={20} color="#0078FA" />
        <Text style={styles.sectionText}>confidence et securité</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.section}>
        <Icon name="umbrella" size={20} color="#0078FA" />
        <Text style={styles.sectionText}>Assurance</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.section}>
        <Icon name="percent" size={20} color="#0078FA" />
        <Text style={styles.sectionText}>conditions generales</Text>
      </TouchableOpacity>
    </View>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    marginTop: 50 ,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 30,
    color: '#555',
  },
  button: {
    backgroundColor: '#0078FA',
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 20,
    width:320,
    height:60,
    // top:,

  },
  buttonText: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
    
    
  },
  loginSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  loginText: {
    fontSize: 16,
    marginRight: 5,
  },
  loginLink: {
    fontSize: 16,
    color: '#007bff',
    fontWeight: 'bold',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  sectionText: {
    fontSize: 18,
    marginLeft: 10,
  },
});
