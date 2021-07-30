/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

export const DetallesPantalla = ({route}) => {
  const {movie} = route.params;
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    const api_url = `http://www.omdbapi.com/?i=${movie.imdbID}&apikey=9803f8df`;
    fetch(api_url)
      .then(data => {
        return data.json();
      })
      .then(resultado => {
        setDatos(resultado);
        console.log(datos);
      });
  }, []);
  return (
    <View style={styles.container}>
      <ScrollView>
        {datos.Poster === 'N/A' ? (
          <View style={styles.borde}>
            <Image
              style={styles.images}
              source={require('../assets/images/no-disponible.png')}
            />
          </View>
        ) : (
          <View>
            <Image style={styles.images} source={{uri: datos.Poster}} />
          </View>
        )}
        <View style={styles.container2}>
          <View style={[styles.caja, styles.caja]}>
            <Text style={styles.txt}>Año de exhibición</Text>
          </View>
          <View style={[styles.caja2, styles.caja2]}>
            <Text style={styles.txt}>{datos.Released}</Text>
          </View>
          <View style={[styles.caja, styles.caja]}>
            <Text style={styles.txt}>Actores</Text>
          </View>
          <View style={[styles.caja2, styles.caja2]}>
            <Text style={styles.txt}>{datos.Actors}</Text>
          </View>
          <View style={[styles.caja, styles.caja]}>
            <Text style={styles.txt}>Sinopsis</Text>
          </View>
          <View style={[styles.caja2, styles.caja2]}>
            <Text style={styles.txt}>{datos.Plot}</Text>
          </View>
          <View style={[styles.caja, styles.caja]}>
            <Text style={styles.txt}>Género de Pelicula</Text>
          </View>
          <View style={[styles.caja2, styles.caja2]}>
            <Text style={styles.txt}>{datos.Genre}</Text>
          </View>
          <View style={[styles.caja, styles.caja]}>
            <Text style={styles.txt}>Productor/a de Pelicula</Text>
          </View>
          <View style={[styles.caja2, styles.caja2]}>
            <Text style={styles.txt}>{datos.Production}</Text>
          </View>
          <View style={[styles.caja, styles.caja]}>
            <Text style={styles.txt}>Premios World</Text>
          </View>
          <View style={[styles.caja2, styles.caja2]}>
            <Text style={styles.txt}>{datos.Awards}</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
  },
  images: {
    width: 350,
    height: 550,
    margin: 5,
    alignSelf: 'center',
    borderRadius: 10,
    borderColor: 'green',
    borderWidth: 2,
  },
  txt: {
    fontWeight: 'bold',
    color: 'purple',
    textAlign: 'center',
    fontSize: 20,
    margin: 10,
    width: 400,
    height: 500,
  },
  container2: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 10,
  },
  caja: {
    height: 50,
    width: 412,
    flex: 1,
    backgroundColor: 'skyblue',
  },
  caja2: {
    height: 150,
    flex: 10,
  },
});
