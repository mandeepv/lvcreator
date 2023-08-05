import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import { useNavigate, Link } from 'react-router-dom';

export default function CampaignCard() {
  const navigate = useNavigate();

  return (
    <Card variant="outlined" sx={{ width: 320 }}>
      <div>
        <Typography level="title-lg">Zomato</Typography>
      </div>
      <AspectRatio minHeight="120px" maxHeight="200px">
        <img
          src="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286"
          srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
          loading="lazy"
          alt=""
        />
      </AspectRatio>
      <CardContent orientation="horizontal">
        <div>
          <Typography level="body-xs">Campaign Price</Typography>
          <br/>
          <Typography fontSize="lg" fontWeight="lg">
            ₹200-₹1000
          </Typography>
        </div>




        
        <Button
          variant="solid"
          size="md"
          color="primary"
          aria-label="Explore Bahamas Islands"
          sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600 }}
          onClick={() => navigate('/campaign')}
        >
           KNOW MORE
        </Button>
      </CardContent>
    </Card>
  );
}
