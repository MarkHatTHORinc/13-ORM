// -----------------------------------------------------------------------------
// Program:  tag-routes.js
// Purpose:  Routing for Tag Table.
// Input:    <none>   
// -----------------------------------------------------------------------------
// Author:   Mark Harrison
// Date:     May 15, 2021
// -----------------------------------------------------------------------------


// -----------------------------------------------------------------------------
// Dependencies
// -----------------------------------------------------------------------------
const router = require('express').Router();  // Routing & middleware framework
const { Category, Product } = require('../../models');  // Models


// -----------------------------------------------------------------------------
// Routing: Get /api/categories - return all Category records and linked Product records
// -----------------------------------------------------------------------------
router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      include: [{ model: Product }],
    });
    if (!categoryData) res.status(404).json({ message: 'No categories were found.' });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});


// -----------------------------------------------------------------------------
// Routing: Get /api/categories/:id - return requested Category record and linked Product records
// -----------------------------------------------------------------------------
router.get('/:id', async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });
    if (!categoryData) res.status(404).json({ message: `Requested category: ${req.params.id} was not found.` });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});


// -----------------------------------------------------------------------------
// Routing: Post /api/tag/ - add requested Category record
// -----------------------------------------------------------------------------
router.post('/', async (req, res) => {
  // create a new category. Id is generated, so only need to pick up name
  try {
    const categoryData = await Category.create({
      category_name: req.body.category_name,
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});


// -----------------------------------------------------------------------------
// Routing: Put /api/categories/:id - update requested Category record
// -----------------------------------------------------------------------------
router.put('/:id', async (req, res) => {
  try {
    const categoryData = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (!categoryData) {
      res.status(404).json({ message: `Category: ${req.params.id} not found.` });
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});


// -----------------------------------------------------------------------------
// Routing: Delete /api/tag/:id - delete requested Category record
// -----------------------------------------------------------------------------
router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!categoryData) {
      res.status(404).json({ message: `Category: ${req.params.id} not found.` });
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});


// -----------------------------------------------------------------------------
// Module Exports
// -----------------------------------------------------------------------------
module.exports = router;
