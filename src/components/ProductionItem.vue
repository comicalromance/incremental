<template>
  <div class="item">
    <i>
      <span class="icon"><slot name="icon"></slot></span>
      <span class="quant"><slot name="quantity"></slot></span>
    </i>
    <div class="details">
      <p>
        <h3>
          <slot name="heading"></slot>
          <span class="alignRight"><slot name="cost"></slot></span>
        </h3>
      </p>
      <em><slot></slot></em>

    </div>
  </div>
</template>

<style scoped>
.item {
  margin-left: 0.5rem;
  display: flex;
  border-radius: 0.8rem;
  transition: 0.3s ease;
  background-color: #cccccc;
  color: #666666;
}
.item h3 {
  color: #666666;
}

.enabled {
  background-color: white !important;
}

.enabled h3 {
  color: #2c3e50 !important;
}
.enabled:hover {
  background-color: lightgray !important;
  cursor: pointer;
}

.quant {
  display: block;
  position: absolute;
  bottom: -0.1rem;
}

.icon {
  display: block;
  position: absolute;
  bottom: 0.8rem;
}

.alignRight {
  float: right;
  display: block;
  font-weight: 400;
  font-size: 0.9rem;
}

.details {
  flex: 1;
  margin-left: 1.5rem;
}

.details p {
  display: block;
}

i {
  display: flex;
  place-items: center;
  place-content: center;
  width: 32px;
  height: 32px;
  color: var(--color-text);
}

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}

@media (min-width: 1024px) {
  .item {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);
  }

  i {
    top: calc(50% - 25px);
    left: 1.5rem;
    position: absolute;
    border: 1px solid var(--color-border);
    background: var(--color-background);
    border-radius: 8px;
    width: 50px;
    height: 50px;
  }

  .item:before {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    bottom: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:after {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    top: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:first-of-type:before {
    display: none;
  }

  .item:last-of-type:after {
    display: none;
  }
}
</style>
