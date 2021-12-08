const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  try{
    const tags = await Tag.findAll({
      attributes: ["tag_name"],
      include: {
        model: Product,
        attributes: ["product_name"]
      }
    })
    res.status(200).json(tags)
  } catch(err){
    res.status(400).json(err)
  }


  // find all tags
  // be sure to include its associated Product data
});

router.get('/:id', async (req, res) => {
  try{
    const tags = await Tag.findOne({
      where: {id: req.params.id},
      attributes: ["tag_name"],
      include: {
        model: Product,
        attributes: ["product_name"]
      }
    })
    res.status(200).json(tags)
  } catch(err){
    res.status(400).json(err)
  }
});


router.post('/', async (req, res) => {
  try{
    const {tag_name} = req.body
    const tag = await Tag.create({tag_name})
    res.status(200).json(tag)
  }catch(err){
    res.status(400).json(err)
  }
  // create a new tag
});

router.put('/:id', async (req, res) => {
  try{
  const tag = await Tag.update (req.body, {
    where: {
      id: req.params.id,
    },
  })
  res.status(200).json(tag)
  }catch(err){
    res.status(400).json(err)
  }
});

router.delete('/:id', async (req, res) => {
  try{
    const tag = await Tag.destroy({
      where: {
        id: req.params.id
      }
    })
    res.status(200).json("success")
  }catch(err){
    res.status(400).json(err)
  }
});

module.exports = router;
