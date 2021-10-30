# Tema 1 : Llenguatges de marques

![Imagen portada](img/Portada.png)


## Què és un llenguatge de marques?

  Un llenguatge de marques és aquell que codifica un document per a ser interpretat.
Combina la informació textual amb una sèrie de marques que proporcionen informació sobre
l'estructura del text o sobre la presentació d'aquest.

Tot llenguatge de marques està definit en un document denominat **DTD** (Document Type Definition). En ell s'estableixen les marques, els elements utilitzats per aquest llenguatge i les seues corresponents etiquetes i atributs, la seua sintaxi i normes d'ús.

- - - 


## Tipus de llenguatges de marques

Existeixen diferents llenguatges de marcat. A la taula següent observen un exemple de cadasquna de les categories:

  | Categoria               | Nom del llenguatge |
  | :---:                   | :---:              |
  | Marcat descriptiu       | XML                |
  |                         | HTML               |
  | Marcat de procediments  | Latex              |
  |                         | PostScript         |
  | Marcat de presentació   | Markdown           |
  |                         | Word               |

* *Marcat de presentació*:
  * Codifica com ha de presentar-se un document. Per exemple, en un processador de textos com Microsoft Word s'afegirà marcat al text per a indicar que una paraula ha de presentar-se en negreta.
  
  > # **Important!**
  >
  >  Si vols veure les marques que afig Microsoft Word al text has de prémer l’icon ![Icon per a vore els símbols ocults](https://support.content.office.net/es-es/media/a7915a15-beda-4cbd-9ca9-936eed874edc.png)

* *Marcat de procediments*
  * Les etiquetes són de presentació igualment però a més es poden indicar subrutines o macros. Exemples de tipus d'eines que usen aquest tipus demarcat són ***LaTeX*** o ***PostScript***

::: note
> Nota: Si vols veure les marques que afig Microsoft Word al text has de prémer l’icon ![Icon per a vore els símbols ocults](https://support.content.office.net/es-es/media/a7915a15-beda-4cbd-9ca9-936eed874edc.png)
:::

  
* *Marcat descriptiu*
  * Les etiquetes descriuen què és cada fragment del text per a indicar què és el que s'està representando.de aquest grup són ***HTML***,***XML***...
  
  

  ```html
    <html>
      <head>
        <title> Ejemplo de código HTML</title>
      </head>
      <body> 
            <p>1 de octubre de 2021</p>
            <p> Bienvenido al modulo de “Lenguajes de Marcas y Sistemas de Gestión de Información” </p>
      </body> 
    </html> 
    ```

- - -


## Història dels llenguatjes de marques

  Els llenguatges de marques van sorgir davant la necessitat d'emmagatzemar tant la presentació com la informació dels documents electrònics, de la mateixa manera que es feia amb els documents que estaven en paper. És per això que sorgeix l'estàndard SGML, però era un llenguatge molt complex i extenso. És a mitjan 80, quan el CERN va pensar en un llenguatge que es basava en alguns principis de SGML però molt més senzill, HTML, amb l'objectiu de compartir informació a través d'internet. A mitjan 90 el W3C cerca un llenguatge més potent per a la web, un llenguatge de marques basat en SGML però que fóra tan senzill com HTML. Sorgeix així el que van denominar XML.

- - -


## Parts d’un document de marcat

  Existeixen diferents parts dins d'un document de llenguatge de marques:

* Etiquetes. Les etiquetes seran totes aquelles paraules que vagen tancades entre els símbols menor (<) i major (>). Per exemple <ciudad>Alacant</ciudad>, la paraula ciutat seria una etiqueta. Existeixen etiquetes d'inici<ciudad>i etiquetes de fi </ciudad>,que porten una barra invertida per a indicar que l'etiquetatge finalitza en aqueix punt.
* Elements. Podem definir com a elements les estructures que es formen en etiquetar el text. Consten de l'etiqueta d'inici, l'etiqueta de fi i tot allò que es troba entre ambdues.
* Atributs. Indica alguna característica de l'etiqueta. És un parell nom=”valor” que s'indica dins de l'etiqueta d'inici, mai en la de fi. Exemple <ciutat país=”Espanya”>Alacant</ciutat>, ens indica que Alacant és una ciutat d'Espanya.

- - -


## Bibliografia

[W3Schools](https://www.w3schools.com)

