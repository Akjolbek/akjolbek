import React from 'react';
import "./Table.css"

const Table = () => {
    return (
    <div style={{display: 'flex', justifyContent: 'space-between'}} className='table'>
    <div>
    <div class="row" style={{marginLeft: '4%', marginTop: '3%'}}>
    <div>
    <img src='https://logodownload.org/wp-content/uploads/2016/03/premier-league-5.png' alt='' style={{width: '50px', height: '50px'}} />
    <h2 style={{color: 'white', marginLeft: '1%'}}>Premier League Table 2021-22</h2>
    </div>
    <table style={{backgroundColor: 'white', marginLeft: '53%'}}> 
      <tr>
        <th>Position</th>
        <th>Club</th>
        <th>Played</th>
        <th>Won</th>
        <th>Drawn</th>
        <th>Lost</th>
        <th>GF</th>
        <th>GA</th>
        <th>GD</th>
        <th>Points</th>
      </tr>
      <tr>
        <td><img src='https://resources.premierleague.com/premierleague/badges/50/t43@x2.png' alt='' style={{width: '40px', height: '40px'}} /></td>
        <td>Manchester City</td>
        <td>17</td>
        <td>13</td>
        <td>2</td>
        <td>2</td>
        <td>40</td>
        <td>9</td>
        <td>31</td>
        <td>41</td>
      </tr>
      <tr>
        <td><img src='https://resources.premierleague.com/premierleague/badges/50/t14@x2.png' alt='' style={{width: '40px', height: '40px'}} /></td>
        <td>Liverpool</td>
        <td>16</td>
        <td>11</td>
        <td>4</td>
        <td>1</td>
        <td>45</td>
        <td>12</td>
        <td>33</td>
        <td>37</td>
      </tr>
      <tr>
        <td><img src='https://resources.premierleague.com/premierleague/badges/50/t8@x2.png' alt='' style={{width: '40px', height: '40px'}} /></td>
        <td>Chelsea</td>
        <td>16</td>
        <td>11</td>
        <td>3</td>
        <td>2</td>
        <td>38</td>
        <td>11</td>
        <td>27</td>
        <td>36</td>
      </tr>
      <tr>
        <td><img src='https://resources.premierleague.com/premierleague/badges/50/t21@x2.png' alt='' style={{width: '40px', height: '40px'}} /></td>
        <td>West Ham</td>
        <td>16</td>
        <td>8</td>
        <td>4</td>
        <td>4</td>
        <td>28</td>
        <td>19</td>
        <td>9</td>
        <td>28</td>
      </tr>
      <tr>
        <td><img src='https://resources.premierleague.com/premierleague/badges/50/t1@x2.png' alt='' style={{width: '40px', height: '40px'}} /></td>
        <td>Manchester United</td>
        <td>16</td>
        <td>8</td>
        <td>3</td>
        <td>5</td>
        <td>26</td>
        <td>24</td>
        <td>2</td>
        <td>27</td>
      </tr>
      <tr>
        <td><img src='https://resources.premierleague.com/premierleague/badges/50/t3@x2.png' alt='' style={{width: '40px', height: '40px'}} /></td>
        <td>Arsenal</td>
        <td>16</td>
        <td>8</td>
        <td>2</td>
        <td>5</td>
        <td>21</td>
        <td>22</td>
        <td>-1</td>
        <td>26</td>
      </tr>
      <tr>
        <td><img src='https://resources.premierleague.com/premierleague/badges/50/t6@x2.png' alt='' style={{width: '40px', height: '40px'}} /></td>
        <td>Tottenham</td>
        <td>14</td>
        <td>8</td>
        <td>1</td>
        <td>5</td>
        <td>16</td>
        <td>17</td>
        <td>-1</td>
        <td>25</td>
      </tr>
      <tr>
        <td><img src='https://resources.premierleague.com/premierleague/badges/50/t13@x2.png' alt='' style={{width: '40px', height: '40px'}} /></td>
        <td>Leicester City</td>
        <td>16</td>
        <td>6</td>
        <td>4</td>
        <td>6</td>
        <td>27</td>
        <td>27</td>
        <td>0</td>
        <td>22</td>
      </tr>
      <tr>
        <td><img src='https://resources.premierleague.com/premierleague/badges/50/t7@x2.png' alt='' style={{width: '40px', height: '40px'}} /></td>
        <td>Aston Villa</td>
        <td>17</td>
        <td>7</td>
        <td>1</td>
        <td>9</td>
        <td>23</td>
        <td>25</td>
        <td>-2</td>
        <td>22</td>
      </tr>
      <tr>
        <td><img src='https://resources.premierleague.com/premierleague/badges/50/t39@x2.png' alt='' style={{width: '40px', height: '40px'}} /></td>
        <td>Wolverhampton</td>
        <td>16</td>
        <td>6</td>
        <td>3</td>
        <td>7</td>
        <td>12</td>
        <td>14</td>
        <td>-2</td>
        <td>21</td>
      </tr>
      <tr>
        <td><img src='https://resources.premierleague.com/premierleague/badges/50/t94@x2.png' alt='' style={{width: '40px', height: '40px'}} /></td>
        <td>Brentford</td>
        <td>16</td>
        <td>5</td>
        <td>5</td>
        <td>6</td>
        <td>21</td>
        <td>22</td>
        <td>-1</td>
        <td>20</td>
      </tr>
      <tr>
        <td><img src='https://resources.premierleague.com/premierleague/badges/50/t36@x2.png' alt='' style={{width: '40px', height: '40px'}} /></td>
        <td>Brighton</td>
        <td>15</td>
        <td>4</td>
        <td>8</td>
        <td>3</td>
        <td>14</td>
        <td>16</td>
        <td>-2</td>
        <td>20</td>
      </tr>
      <tr>
        <td><img src='https://resources.premierleague.com/premierleague/badges/50/t31@x2.png' alt='' style={{width: '40px', height: '40px'}} /></td>
        <td>Crystal Palace</td>
        <td>16</td>
        <td>4</td>
        <td>7</td>
        <td>5</td>
        <td>22</td>
        <td>22</td>
        <td>0</td>
        <td>19</td>
      </tr>
      <tr>
        <td><img src='https://resources.premierleague.com/premierleague/badges/50/t11@x2.png' alt='' style={{width: '40px', height: '40px'}} /></td>
        <td>Everton</td>
        <td>16</td>
        <td>5</td>
        <td>3</td>
        <td>8</td>
        <td>20</td>
        <td>28</td>
        <td>-8</td>
        <td>18</td>
      </tr>
      <tr>
        <td><img src='https://resources.premierleague.com/premierleague/badges/50/t20@x2.png' alt='' style={{width: '40px', height: '40px'}} /></td>
        <td>Southampton</td>
        <td>16</td>
        <td>3</td>
        <td>7</td>
        <td>6</td>
        <td>14</td>
        <td>24</td>
        <td>-10</td>
        <td>16</td>
      </tr>
      <tr>
        <td><img src='https://resources.premierleague.com/premierleague/badges/50/t2@x2.png' alt='' style={{width: '40px', height: '40px'}} /></td>
        <td>Leeds</td>
        <td>17</td>
        <td>3</td>
        <td>7</td>
        <td>7</td>
        <td>17</td>
        <td>32</td>
        <td>15</td>
        <td>16</td>
      </tr>
      <tr>
        <td><img src='https://resources.premierleague.com/premierleague/badges/50/t57@x2.png' alt='' style={{width: '40px', height: '40px'}} /></td>
        <td>Watford</td>
        <td>16</td>
        <td>4</td>
        <td>1</td>
        <td>11</td>
        <td>21</td>
        <td>31</td>
        <td>-10</td>
        <td>13</td>
      </tr>
      <tr>
        <td><img src='https://resources.premierleague.com/premierleague/badges/50/t90@x2.png' alt='' style={{width: '40px', height: '40px'}} /></td>
        <td>Burnley</td>
        <td>15</td>
        <td>1</td>
        <td>8</td>
        <td>6</td>
        <td>14</td>
        <td>21</td>
        <td>-7</td>
        <td>11</td>
      </tr>
      <tr>
        <td><img src='https://resources.premierleague.com/premierleague/badges/50/t4@x2.png' alt='' style={{width: '40px', height: '40px'}} /></td>
        <td>Newcastle</td>
        <td>16</td>
        <td>1</td>
        <td>7</td>
        <td>8</td>
        <td>17</td>
        <td>34</td>
        <td>-17</td>
        <td>10</td>
      </tr>
      <tr>
        <td><img src='https://resources.premierleague.com/premierleague/badges/50/t45@x2.png' alt='' style={{width: '40px', height: '40px'}} /></td>
        <td>Norvich</td>
        <td>17</td>
        <td>2</td>
        <td>4</td>
        <td>11</td>
        <td>8</td>
        <td>34</td>
        <td>-26</td>
        <td>10</td>
      </tr>
    </table>
    </div>
    </div>
    </div>
    );
};

export default Table;