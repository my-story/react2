import React, { Component } from 'react';
import Link from 'next/link';

class InfluencerChart extends Component {
  state = { 

  }


  render() {
    return(
      <div>
        <div>
          <h2>Create</h2>
          <Link href="/create/influencer" as={`/create/influencer`}>Influencer</Link>
          <Link href="/create/review" as={`/create/review`}>Review</Link>
          <Link href="/create/product-main" as={`/create/product-main`}>Product</Link>
          <Link href="/create/kit" as={`/create/kit`}>Kit</Link>
          <Link href="/create/product" as={`/create/product`}>SurvivalProduct</Link>
          <Link href="/create/technique" as={`/create/technique`}>Technique</Link>
          <Link href="/create/tip" as={`/create/tip`}>Tip</Link>
        </div>
        <Link href="admin/update/" as={`/admin/update`}>update</Link>
      </div>
    )
  }
};

export default InfluencerChart;
