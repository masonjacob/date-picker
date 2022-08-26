import { useEffect, useState } from 'react';
import Card from './Card';
import Filter from './Filter'
import {motion, AnimatePresence} from 'framer-motion'

function App() {

  const [cards, setCards] = useState([]);
  const [filter, setFilter] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [tags,setTags] = useState([]);

  useEffect(() => {
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getTags = (cards) => {
    let tags = [];
    cards.forEach((card) => {
      let obj = JSON.parse(card.tags);
      obj.forEach((tag) => {
        if (!tags.includes(tag)) {
          tags.push(tag);
        }
      });
    });
    tags.sort(((a, b) => a.localeCompare(b)));
    setTags(tags);
  }

  const fetchData = async () => {
    const data = require("../assets/data/data.json");
    setCards(data);
    setFilter(data);
    getTags(data);
  }

  return (
    <div className="app">
      <Filter
      cards={cards}
      tags={tags}
      setFilter={setFilter}
      activeFilter={activeFilter}
      setActiveFilter={setActiveFilter}
      />
      <motion.div layout className="cards">
        <AnimatePresence>
        {filter.map((card) => {
          return <Card key={card.id} card={card}/>;
        })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default App;


/*  Helpful Function to sort by value associated with a certain key

function sortByKey(object, key) {
    return object.sort(function(a, b) {
        var x = a[key]; var y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
}

  */

