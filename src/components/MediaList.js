import React from 'react';
import profileImage from '../images/unicorn.jpg';
import MediaCard from './MediaCard';

const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque tempora quas fugit, adipisci modi, iure, nam placeat illo quis sequi labore ex impedit autem consequatur enim laborum perferendis accusamus temporibus!Excepturi alias possimus quibusdam praesentium consequuntur. Vitae deserunt, nobis exercitationem ullam similique quia tempore eveniet ipsum eos inventore, incidunt vel et asperiores nihil suscipit hic amet consectetur. Velit, modi aperiam.";

class MediaList extends React.Component {
  render() {
    return (
      <section>
        <h1>People List</h1>
        <ul>
          <li>
            <MediaCard name="Alex Guerrero" date="Lunes 26 de junio de 2017" image={profileImage} description={text} likes={37} heartFill={false} />
          </li>
          <li>
            <MediaCard name="Megan" date="Miercoles 28 de junio de 2017" image={profileImage} description={text} likes={100} heartFill={true} />
          </li>
          <li>
            <MediaCard name="Aia" date="Domingo 25 de junio de 2017" image={profileImage} description={text} likes={9} heartFill={false} />
          </li>
        </ul>
      </section>
    )
  }
};

export default MediaList;
